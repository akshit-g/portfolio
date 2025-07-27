import { TimeLine, TimeLineItem } from "../utils/exp-timeline";

const Experience = () => {
    return (
        <div className="w-full relative pt-10 pb-20">
            <TimeLine>
                <TimeLineItem active>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                            Academic Trainee (Digital Risk and Cloud Sec) at KPMG India
                        </span>
                        {" "}|{" "}
                        <span className="text-neutral-200">
                            (Jan 2025 - Jul 2025)
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                        Gained foundational expertise in enterprise systems and compliance through extensive training in Power BI, Cybersecurity, IAM, and SAP ERP. Collaborated on drafting national data and AI security policies, performed LLM red-teaming, and co-developed an internal tool to visualize and summarize audit reports.
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                            Machine Learning Intern at Government of India
                        </span>
                        {" "}|{" "}
                        <span className="text-neutral-200">
                            (Jun 2024 - Aug 2024)
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                        Developed a high-performance File Transfer Platform that doubled data transfer speeds and enhanced geospatial projects, cutting processing overhead by 45%. Created a custom CNN model for Object Detection and Classification, achieving 92% accuracy and an 80% reduction in processing time.
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem last>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                            Data Analyst Intern at Afame Technologies
                        </span>
                        {" "}|{" "}
                        <span className="text-neutral-200">
                            (Apr 2024 - May 2024)
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                        Leveraged data analysis to identify trends and predict employee churn with 84% accuracy, improving HR decision-making. Enhanced data quality through cleansing and created visualizations, which increased business optimization accuracy by 35%.
                    </TimeLineItem.Description>
                </TimeLineItem>
            </TimeLine>
        </div>
    );
};

export default Experience;