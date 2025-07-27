import AnimationContainer from "../utils/animation-container";

const AboutMe = () => {
    return (
        <div className="w-full relative pt-10 pb-20 z-40">
            <AnimationContainer
                animation="slide-up"
                className="flex items-center justify-center overflow-hidden w-full mx-auto"
            >
                <div className="w-full">
                    <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
                        About Me
                    </h2>
                </div>
            </AnimationContainer>
            <AnimationContainer
                animation="slide-up"
                className="flex items-center justify-center overflow-hidden w-full mx-auto pt-10"
            >
                <div className="w-full flex items-center justify-center">
                    <p className="text-base md:text-lg text-justify w-full">
                        As a passionate and detail-oriented Computer Science student specializing in AI/ML, I have practical experience in developing robust machine learning models and enhancing data security protocols. My background includes contributing to national AI security policies and LLM red-teaming efforts at KPMG India, alongside developing high-accuracy predictive models for diverse applications. I am driven by the challenge of solving complex problems at the intersection of generative AI, data analysis, and cybersecurity. Let's build something amazing together! ✨
                    </p>
                </div>
            </AnimationContainer>
        </div>
    )
};

export default AboutMe
