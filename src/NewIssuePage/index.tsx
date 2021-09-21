import React, { useEffect, useState } from "react";
import { commitMutation, usePreloadedQuery } from "react-relay";
import { useHistory } from "react-router";
import { preloadedQueryRepoName } from "../App";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { CreateIssueMutation } from "../CreateIssueMutation";
import createRelayEnvironment from "../createRelayEnvironment";
import { RepositoryQuery } from "../RepositoryQuery";

const NewIssuePage = () => {
    const refreshState = { repositoryId: null, title: "", body: "" };

    const [issue, setIssue] = useState(refreshState)
    const history = useHistory()

    // const user = usePreloadedQuery(OwnerQuery, preloadedQueryRepo);
    // console.log(user)

    const repo: any = usePreloadedQuery(RepositoryQuery, preloadedQueryRepoName);

    useEffect(() => {
        console.log(repo)
        setIssue(state => ({ ...state, repositoryId: repo.repository.id }));

    }, [repo])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIssue(state => ({ ...state, [event.target.name]: event.target.value }));
    }

    const onClick = (event: React.MouseEvent) => {

        commitMutation(createRelayEnvironment, {
            mutation: CreateIssueMutation,
            variables: {
                repositoryId: issue.repositoryId, title: issue.title, body: issue.body
            },
            onCompleted: (response: any, errors) => {
                console.log(response)
                setIssue(refreshState)
                if (response.createIssue && response.createIssue && response.createIssue.issue.id) {
                    history.push("/")
                }
            }
        })
    }

    return (
        <div className="w-full dark:bg-gray-900 bg-gray-200 p-8 pt-4 rounded">
            {/* <input type="text" name="title" onChange={handleChange} /> */}
            <Input label="Title" name="title" onChange={handleChange} />
            <Input label="Body" multiple={true} rows={5} name="body" onChange={handleChange} />
            <Button label="Submit" onClick={onClick} />
        </div>
    )
}

export default NewIssuePage