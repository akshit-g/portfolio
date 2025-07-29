import { TimeLine, TimeLineItem } from "../utils/edu-timeline";

const Experience = () => {
    return (
        <div className="w-full relative pt-10 pb-20">
            <TimeLine>
                <TimeLineItem active>
                    <div>
                        <TimeLineItem.Title>
                            <span className="font-medium">
                                UPES
                            </span>
                        </TimeLineItem.Title>
                        <div className="text-sm text-muted-foreground">
                            Jan 2025 - Jul 2025
                        </div>
                    </div>
                    <TimeLineItem.Description>
                        <ul className="list-disc pl-4 space-y-2">
                            <li>Gained foundational expertise in enterprise systems and compliance through extensive training in Power BI, Cybersecurity, IAM, and SAP ERP.</li>
                            <li>Collaborated on drafting national data and AI security policies, performed LLM red-teaming, and co-developed an internal tool to visualize and summarize audit reports.</li>
                        </ul>
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem>
                    <div>
                        <TimeLineItem.Title>
                            <span className="font-medium">
                                MVN
                            </span>
                        </TimeLineItem.Title>
                        <div className="text-sm text-muted-foreground">
                            Jun 2024 - Aug 2024
                        </div>
                    </div>
                    <TimeLineItem.Description>
                        <ul className="list-disc pl-4 space-y-2">
                            <li>Developed a high-performance File Transfer Platform that doubled data transfer speeds and enhanced geospatial projects, cutting processing overhead by 45%.</li>
                            <li>Created a custom CNN model for Object Detection and Classification, achieving 92% accuracy and an 80% reduction in processing time.</li>
                        </ul>
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem last>
                    <div>
                        <TimeLineItem.Title>
                            <span className="font-medium">
                               Apeejay
                            </span>
                        </TimeLineItem.Title>
                        <div className="text-sm text-muted-foreground">
                            Apr 2024 - May 2024
                        </div>
                    </div>
                    <TimeLineItem.Description>
                       <ul className="list-disc pl-4 space-y-2">
                            <li>Leveraged data analysis to identify trends and predict employee churn with 84% accuracy, improving HR decision-making.</li>
                            <li>Enhanced data quality through cleansing and created visualizations, which increased business optimization accuracy by 35%.</li>
                        </ul>
                    </TimeLineItem.Description>
                </TimeLineItem>
            </TimeLine>
        </div>
    );
};

export default Experience;