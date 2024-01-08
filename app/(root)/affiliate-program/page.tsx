import AffiliateBanner from "@/app/(root)/_components/homepage/AffiliateBanner";
import CTA from "@/app/(root)/_components/homepage/CTA";
import CenteredFeatures from "@/app/(root)/_components/homepage/CenteredFeatures";
import FrequentlyAskedQuestions from "@/app/(root)/_components/homepage/FrequentlyAskedQuestions";
import Footer from "@/components/shared/Footer";
import React from "react";

const AffiliatePage = () => {
    return (
        <>
            <AffiliateBanner />
            <CenteredFeatures />
            <FrequentlyAskedQuestions />
            <CTA />
            <Footer tBorder />
        </>
    );
};

export default AffiliatePage;
