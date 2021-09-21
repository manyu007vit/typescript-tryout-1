import { dateFormater } from "../Utility"
import Label from "./Label"

type IssueProps = {
    id?: string
    title?: string
    author: string
    labels?: Array<String>
    createdDate: Date
}

function Issue({ id, title, author, labels, createdDate }: IssueProps) {

    return (
        <div className="sm:container mx-auto mb-4 flex flex-row space-x-2">
            <div className="flex-grow px-6 py-2 h-full bg-white dark:bg-gray-800 rounded-md shadow-xl">
                <div className="flex space-x-4 justify-start align-middle w-full h-full">
                    <div className="flex-grow flex flex-col text-left align-middle text-black dark:text-white">
                        <div className="text-md">
                            {title}
                        </div>
                        {/* {
                            labels && labels.length > 0 && (
                                <div className="h-3 mt-1">

                                </div>
                            )
                        } */}
                        <div className="divide-y divide-white h-1" />
                        <div className="flex justify-between pt-4">
                            <div className="text-left text-xs dark:text-gray-400 text-gray-700 text-opacity-60">
                                {`by ${author}`}
                            </div>
                            <div className="text-right text-xs dark:text-gray-400 text-gray-700 text-opacity-60">
                                {createdDate ? dateFormater(createdDate) : "-"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-none w-36">
                {
                    labels && labels.length > 0 && (
                        <div className=" flex flex-col space-y-1">
                            {labels.map((label, i) => <Label key={i} label={label} />)}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Issue
