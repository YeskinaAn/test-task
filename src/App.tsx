import CodeMirror from "@uiw/react-codemirror";
import { useTagStore } from "./store/inputStore";
import { autocompletion } from "@codemirror/autocomplete";
import { myTheme } from "./theme";
import { TagType } from "./types/tagTypes";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const value = useTagStore((state) => state.value);
  const changeTag = useTagStore((state) => state.changeTag);
  const { data: tagData } = useQuery<TagType[]>({
    queryKey: [`/autocomplete`],
  });

  const options: any = tagData?.map((el) => {
    return { label: el.name, type: "text" };
  });

  const myCompletions = (context: any) => {
    let word = context.matchBefore(/\w*/);
    if (word.from === word.to && !context.explicit) return null;
    return {
      from: word.from,
      options: options,
    };
  };

  return (
    <CodeMirror
      value={value}
      height="50px"
      onChange={changeTag}
      theme={myTheme}
      extensions={[autocompletion({ override: [myCompletions] })]}
    />
  );
};

export default App;
