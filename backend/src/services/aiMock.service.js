exports.runMockProcessing = async (projectTitle) => {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
        videoUrl: "https://example.com/mock-video.mp4",
        script: `This video explains how to use ${projectTitle}.`,
        steps: [
            {
                stepNumber: 1,
                text: "Open the application dashboard.",
                screenshotUrl: "https://example.com/step1.png",
            },
            {
                stepNumber: 2,
                text: "Navigate to the main feature.",
                screenshotUrl: "https://example.com/step2.png",
            },
            {
                stepNumber: 3,
                text: "Complete the workflow and save changes.",
                screenshotUrl: "https://example.com/step3.png",
            },
        ],
    };
};