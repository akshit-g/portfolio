// import { TimeLine, TimeLineItem } from "../utils/edu-timeline";

// const Experience = () => {
//     return (
//         <div className="w-full relative pt-10 pb-20">
//             <TimeLine>
//                 <TimeLineItem active>
//                     <div>
//                         <TimeLineItem.Title>
//                             <span className="font-medium">
//                                 UPES
//                             </span>
//                         </TimeLineItem.Title>
//                         <div className="text-sm text-muted-foreground">
//                             Jan 2025 - Jul 2025
//                         </div>
//                     </div>
//                     <TimeLineItem.Description>
//                         <ul className="list-disc pl-4 space-y-2">
//                             <li>Gained foundational expertise in enterprise systems and compliance through extensive training in Power BI, Cybersecurity, IAM, and SAP ERP.</li>
//                             <li>Collaborated on drafting national data and AI security policies, performed LLM red-teaming, and co-developed an internal tool to visualize and summarize audit reports.</li>
//                         </ul>
//                     </TimeLineItem.Description>
//                 </TimeLineItem>

//                 <TimeLineItem>
//                     <div>
//                         <TimeLineItem.Title>
//                             <span className="font-medium">
//                                 MVN
//                             </span>
//                         </TimeLineItem.Title>
//                         <div className="text-sm text-muted-foreground">
//                             Jun 2024 - Aug 2024
//                         </div>
//                     </div>
//                     <TimeLineItem.Description>
//                         <ul className="list-disc pl-4 space-y-2">
//                             <li>Developed a high-performance File Transfer Platform that doubled data transfer speeds and enhanced geospatial projects, cutting processing overhead by 45%.</li>
//                             <li>Created a custom CNN model for Object Detection and Classification, achieving 92% accuracy and an 80% reduction in processing time.</li>
//                         </ul>
//                     </TimeLineItem.Description>
//                 </TimeLineItem>

//                 <TimeLineItem last>
//                     <div>
//                         <TimeLineItem.Title>
//                             <span className="font-medium">
//                                Apeejay
//                             </span>
//                         </TimeLineItem.Title>
//                         <div className="text-sm text-muted-foreground">
//                             Apr 2024 - May 2024
//                         </div>
//                     </div>
//                     <TimeLineItem.Description>
//                        <ul className="list-disc pl-4 space-y-2">
//                             <li>Leveraged data analysis to identify trends and predict employee churn with 84% accuracy, improving HR decision-making.</li>
//                             <li>Enhanced data quality through cleansing and created visualizations, which increased business optimization accuracy by 35%.</li>
//                         </ul>
//                     </TimeLineItem.Description>
//                 </TimeLineItem>
//             </TimeLine>
//         </div>
//     );
// };

// export default Experience;

import { TimeLine, TimeLineItem } from "../utils/edu-timeline";

const Education = () => {
    return (
        <div className="w-full relative pt-10 pb-20">
            <TimeLine>
                <TimeLineItem active>
                    <div>
                        <TimeLineItem.Title>
                            <span className="font-medium">
                                University of Petroleum and Energy Studies  |  CGPA : 8.95
                            </span>
                        </TimeLineItem.Title>
                        <div className="text-sm text-muted-foreground">
                            Aug 2021 - Jun 2025
                        </div>
                    </div>
                    <TimeLineItem.Description>
                        <ul className="list-disc pl-4 space-y-2">
                            <li>Google DSC Lead for 2024</li>
                            <li>Served at NSS UPES as Associate Technical Head</li>
                            <li>Mentored and led projects at UPES OPEN as Lead Student Developer</li>
                        </ul>
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem>
                    <div>
                        <TimeLineItem.Title>
                            <span className="font-medium">
                                Modern Vidya Niketan Aravali Hills (Non-Medical)  |  %age : 94.6%
                            </span>
                        </TimeLineItem.Title>
                        <div className="text-sm text-muted-foreground">
                            Mar 2019 - Apr 2021
                        </div>
                    </div>
                    <TimeLineItem.Description>
                        <ul className="list-disc pl-4 space-y-2">
                            <li>Served as the Head of the Student Council, leading student body initiatives.</li>
                            <li>Represented the school in numerous debate competitions.</li>
                        </ul>
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem last>
                    <div>
                        <TimeLineItem.Title>
                            <span className="font-medium">
                                Apeejay Stya Education (Svran Foundation)   |  %age : 93.5%
                            </span>
                        </TimeLineItem.Title>
                        <div className="text-sm text-muted-foreground">
                            Mar 2017 - Apr 2019
                        </div>
                    </div>
                    <TimeLineItem.Description>
                       <ul className="list-disc pl-4 space-y-2">
                            <li>Honored with the prestigious Dr. Stya Paul Award for Human Values.</li>
                            <li>Led the Junior Student Council as its Head.</li>
                            <li>Competed in FLLs as a member of "Thinkquanauts," the school's robotics team.</li>
                        </ul>
                    </TimeLineItem.Description>
                </TimeLineItem>
            </TimeLine>
        </div>
    );
};

export default Education;