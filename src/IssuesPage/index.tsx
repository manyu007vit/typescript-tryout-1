import React, { Suspense, useCallback, useEffect, useState } from "react";
import { usePreloadedQuery } from "react-relay";
import Button from "../Components/Button";
import Dropdown from "../Components/Dropdown";
import Issue from "../Components/Issue";
import SearchBar from "../Components/Searchbar";
import { RepositoryIssuesQuery } from "../RepositoryIssuesQuery";

interface IssueProps {
    title: string
    author: string
    labels?: Array<String>
    createdDate: Date
    id?: string
    ownerName: string
    repoName: string
}




const IssuesPage = (props: any) => {

    const { preloadedQuery, refresh: refreshParent } = props;

    const data: any = usePreloadedQuery(RepositoryIssuesQuery, preloadedQuery);
    console.log(data)

    const [labels, setLabels] = useState<[String] | null>(null);
    const [issuesList, setIssuesList] = useState<Array<IssueProps>>();

    const options = ["documentation", "invalid", "question", "help wanted", "good first issue", "invalid", "question", "wontfix"]

    const [searchText, setSearchText] = useState<string | null | undefined>(null);

    // setIssuesList(data
    //     && data.repository.issues
    //     && data.repository.issues
    //     && data.repository.issues.edges.map((i: any) => ({
    //         title: i.node?.title,
    //         author: i.node?.author?.login ?? "",
    //         labels: i.node?.labels?.nodes.length > 0
    //             ? i.node.labels.nodes.map((l: { name: string }) => l.name) :
    //             [],
    //         createdDate: i.node.createdAt ? new Date(i.node.createdAt) : undefined
    //     })))

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setLabels([event.target.value])
    }

    const refresh = useCallback(() => {
        refreshParent && refreshParent(labels?.includes("None") ? null : labels);
    }, [labels, refreshParent])

    useEffect(() => {
        setIssuesList(
            data?.repository?.issues?.edges?.filter((i: any) => searchText ? i.node?.title?.toLowerCase().includes(searchText.toLowerCase()) : true).map((i: any) => ({
                title: i.node?.title,
                author: i.node?.author?.login ?? "",
                labels: i.node?.labels?.nodes.length > 0
                    ? i.node.labels.nodes.map((l: { name: string }) => l.name) :
                    [],
                createdDate: i.node.createdAt ? new Date(i.node.createdAt) : undefined
            })))
    }, [searchText, data, labels, refresh])

    return (
        <Suspense fallback={"Loading..."}>
            <div className="w-full dark:bg-gray-900 bg-gray-200 p-8 pt-4 rounded">
                <div className="my-2 mx-2 flex space-x-2 items-center">
                    <div>
                        <Dropdown title="Filter By Label" size="small" options={options} onChange={onChange} />
                    </div>
                    <div>
                        <SearchBar placeholder="Search..." onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)} />
                    </div>
                    <div >
                        <Button
                            size="small"
                            onClick={() => refresh()}
                            label="Refresh" />
                    </div>
                </div>
                <div className="w-full">
                    {
                        issuesList?.map((issue, index) => <Issue key={index} title={issue.title} id={issue.id} author={issue.author} labels={issue.labels} createdDate={issue.createdDate} />)
                    }
                </div>
            </div>
        </Suspense>
    )
}

export default IssuesPage