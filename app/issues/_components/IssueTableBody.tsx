import StatusBadge from "@/app/components/StatusBadge";
import { Issue } from "@prisma/client";
import { Link, Table } from "@radix-ui/themes";

interface Params {
    issueData: Issue[];
}

const IssueTableBody = ({ issueData }: Params) => {
    return (
        <Table.Body>
            {issueData.map((issue, index) => (
                <Table.Row key={"Issue_Row_" + index}>
                    <Table.RowHeaderCell className="flex between justify-between THEMED THEMED-text3">
                        <Link
                            href={`/issues/${issue.id}`}
                            className="THEMED-text5"
                        >
                            {issue.title}
                        </Link>
                        <div className="block md:hidden">
                            <StatusBadge status={issue.status} />
                        </div>
                    </Table.RowHeaderCell>
                    <Table.Cell className="hidden md:table-cell THEMED THEMED-text3">
                        <StatusBadge status={issue.status} />
                    </Table.Cell>
                    <Table.Cell className="hidden md:table-cell THEMED THEMED-text3">
                        {issue.createdAt.toDateString()}
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    );
};

export default IssueTableBody;
