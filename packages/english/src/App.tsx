import React, { useState } from "react";
import IrregularVerbTable from "./components/IrregularVerbTable";
import ArticlePractice from "./components/ArticlePractice";

const App: React.FC = () => {
    const [tab, setTab] = useState<"verb" | "article">("verb");

    return (
        <div style={{ padding: 24 }}>
            <h1>English Micro Frontend</h1>
            <div style={{ marginBottom: 16 }}>
                <button onClick={() => setTab("verb")} style={{ marginRight: 8 }}>
                    不規則動詞
                </button>
                <button onClick={() => setTab("article")}>
                    冠詞練習
                </button>
            </div>
            {tab === "verb" ? <IrregularVerbTable /> : <ArticlePractice />}
        </div>
    );
};

export default App;