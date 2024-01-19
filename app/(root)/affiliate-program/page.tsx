import AffiliateBanner from "@/app/(root)/affiliate-program/_components/AffiliateBanner";
import CTA from "@/app/(root)/affiliate-program/_components/CTA";
import CenteredFeatures from "@/app/(root)/affiliate-program/_components/CenteredFeatures";
import FrequentlyAskedQuestions from "@/app/(root)/affiliate-program/_components/FrequentlyAskedQuestions";
import Footer from "@/components/shared/Footer";
import React from "react";

const AffiliatePage = () => {
    return (
        <>
            <AffiliateBanner />
            <CenteredFeatures />
            <FrequentlyAskedQuestions />
            <CTA />
            <Footer tBorder={false} />
        </>
    );
};

export default AffiliatePage;
