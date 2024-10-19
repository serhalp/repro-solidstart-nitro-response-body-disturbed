import { useAction, useSubmission } from "@solidjs/router";
import { Match, Switch } from "solid-js";
import { submitAnswer as originalSubmitAnswer } from "~/lib/api";

const Answer = (props: {
  answer: string;
  onSelect: (prompt: string) => unknown;
}) => {
  return (
    <>
      <div onClick={() => props.onSelect(props.answer)}>{props.answer}</div>
    </>
  );
};

export default function Home() {
  const submitAnswer = useAction(originalSubmitAnswer);
  const submittingAnswer = useSubmission(originalSubmitAnswer);

  return (
    <Switch>
      <Match when={submittingAnswer.pending === true}>
        Submitting answer...
      </Match>
      <Match when={submittingAnswer.error}>
        Error: {submittingAnswer.error}
      </Match>

      <Match when={true}>
        <>
          <div>
            {submittingAnswer.pending === false
              ? typeof submittingAnswer.result === "boolean"
                ? submittingAnswer.result === true
                  ? "✅ Correct!"
                  : "❌ Incorrect!"
                : "⚠️ Oops, something went wrong"
              : null}
          </div>

          <Answer
            answer="click me"
            onSelect={async (answer: string) => {
              await submitAnswer(answer);
            }}
          />
        </>
      </Match>
    </Switch>
  );
}
