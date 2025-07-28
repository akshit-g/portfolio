import ProjectCards from "../contents/project-cards";
import AnimationContainer from "../utils/animation-container";
import Heading from "../utils/heading";
import Wrapper from "../utils/wrapper";

const ProjectSection = () => {
    return (
        <Wrapper>
            <div className="flex flex-col items-start w-full mt-0 lg:mt-8">
                <Heading title="My Projects" />

                <AnimationContainer className="w-full flex flex-col gap-5 mb-8">
                    <p className="text-base text-justify lg:leading-8 text-foreground/80">
                        Here's a collection of my work where I've applied machine learning to build tangible, data-driven solutions. From predictive engines for financial markets and air quality to platforms designed for mental wellness and document security, these projects demonstrate my passion for using Python and AI to tackle complex, real-world challenges.
                    </p>
                </AnimationContainer>

                <ProjectCards />
            </div>
        </Wrapper>
    )
};

export default ProjectSection
