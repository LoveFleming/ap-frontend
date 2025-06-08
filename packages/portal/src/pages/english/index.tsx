import React from "react";
const ArticlePractice = React.lazy(
    // @ts-ignore
    () => import('englishArticle/ArticlePractice')
);

export default function EnglishArticleRemotePage() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <ArticlePractice />
        </React.Suspense>
    );
}
