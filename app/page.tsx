import { Card } from "@radix-ui/themes";
import LatestIssues from "./LatestIssues";

export default async function Home() {
    return (
        <div className="w-full flex justify-center mt-20">
            <Card className="THEMED">
                <p className="THEMED THEMED-text1 mb-5">Latest Issues</p>
                <LatestIssues />
            </Card>
        </div>
    );
}
