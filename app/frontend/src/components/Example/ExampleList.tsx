import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Hva er Atea Asset Management?",
        value: "Hva er Atea Asset Management?"
    },
    { text: "Gi meg en liste med navn på de som jobber i Atea Asset Management", value: "Gi meg en liste med navn på de som jobber i Atea Asset Management" },
    { text: "Gi meg etterspørsels beskrivelsen til Asset autodiscovery punktvis nedover", value: "Gi meg etterspørsels beskrivelsen til Asset autodiscovery punktvis nedover" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
