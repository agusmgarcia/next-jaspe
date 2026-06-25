import { sorts } from "@agusmgarcia/react-essentials-utils";
import { useCallback, useMemo, useRef, useState } from "react";

import { constants, downloadFile, takeScreenshot } from "#src/utils";

import type IndexPageProps from "./IndexPage.types";
import { type ViewerTypes } from "./Viewer";

export default function useIndexPage(props: IndexPageProps) {
  const viewerRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState<ViewerTypes.default>({
    description: "",
    formatId: "story",
    stoneId: "obsidian",
    title: "",
  });

  const style = useMemo(
    () => ({
      backgroundColor: `${constants.STONES[values.stoneId].background}15`,
    }),
    [values.stoneId],
  );

  const submitStyles = useMemo(
    () => ({
      backgroundColor: constants.STONES[values.stoneId].background,
      color: constants.STONES[values.stoneId].foreground,
    }),
    [values.stoneId],
  );

  const submitDisabled = useMemo(
    () =>
      loading ||
      !values.description ||
      !values.formatId ||
      !values.stoneId ||
      !values.title,
    [
      loading,
      values.description,
      values.formatId,
      values.stoneId,
      values.title,
    ],
  );

  const stones = useMemo(
    () =>
      Object.keys(constants.STONES)
        .map((stoneId) => ({
          id: stoneId,
          label:
            constants.STONES[stoneId as keyof typeof constants.STONES].label,
        }))
        .sort((s1, s2) => sorts.byStringAsc(s1.label, s2.label)),
    [],
  );

  const handleChange = useCallback<
    React.ChangeEventHandler<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  >(
    (event) =>
      setValues((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      })),
    [],
  );

  const handleSubmit = useCallback<React.SubmitEventHandler<HTMLFormElement>>(
    async (event) => {
      event.preventDefault();
      if (submitDisabled) return;

      const element = viewerRef.current;
      if (!element) return;

      setLoading(true);
      try {
        const blob = await takeScreenshot({ element });
        await downloadFile({ blob, name: "output.webp" });
      } finally {
        setLoading(false);
      }
    },
    [submitDisabled],
  );

  return {
    ...props,
    handleChange,
    handleSubmit,
    loading,
    stones,
    style,
    submitDisabled,
    submitStyles,
    values,
    viewerRef,
  };
}
