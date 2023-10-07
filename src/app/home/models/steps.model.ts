import { STEPS_IMGS } from "src/app/core/constants/imgs-paths";

export interface Step {
    mobileTitle: string;
    desktopTitle: string;
    desktopSubTitle: string;
    description: string;
    icon: string;
}

const getSteps = (): Step[] => {
    return [
        {
            icon: STEPS_IMGS.SUBSCRIBE_IMG_PATH,
            mobileTitle: 'Step 1: Subscribe',
            desktopTitle: 'Step 1:',
            desktopSubTitle: 'Subscribe',
            description: 'Select a subscription plan that suits your child\'s learning needs and preferences.',
        },
        {
            icon: STEPS_IMGS.CUSTOMIZE_IMG_PATH,
            mobileTitle: 'Step 2: Personalise Your Box',
            desktopTitle: 'Step 2:',
            desktopSubTitle: 'Personalise Your Box',
            description: 'Tell us about your child\'s age, interests, and learning goals, and we\'ll customize their surprise box accordingly.',
        },
        {
            icon: STEPS_IMGS.SURPRISE_IMG_PATH,
            mobileTitle: 'Step 3: Receive Your Surprise Box',
            desktopTitle: 'Step 3:',
            desktopSubTitle: 'Receive Your Surprise Box',
            description: 'Sit back and relax as your child eagerly awaits the arrival of their monthly surprise box filled with engaging learning materials.',
        }
    ]
}

export const STEPS: Step[] = getSteps();

