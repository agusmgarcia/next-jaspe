import Head from "next/head";

import { Image } from "#src/components";
import { constants } from "#src/utils";

import useIndexPage from "./IndexPage.hooks";
import type IndexPageProps from "./IndexPage.types";
import { Viewer } from "./Viewer";

export default function IndexPage(props: IndexPageProps) {
  const {
    handleChange,
    handleSubmit,
    loading,
    stones,
    submitDisabled,
    submitStyles,
    values,
    viewerRef,
    ...rest
  } = useIndexPage(props);

  return (
    <main
      {...rest}
      className="flex min-h-screen w-screen items-center justify-center overflow-x-hidden transition-colors"
    >
      <Head>
        <title>Jaspe</title>
      </Head>

      <div className="flex w-full max-w-md flex-col items-center gap-8 p-8">
        <Image alt="" src={constants.LOGO_PATHS["black"]} width={200} />

        <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          {/* STONE ID */}
          <label className="flex flex-col gap-1">
            <span className="font-cinzel text-sm font-medium">Piedra</span>

            <select
              className="rounded border border-black px-3 py-2"
              name="stoneId"
              onChange={handleChange}
              value={values.stoneId}
            >
              {stones.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-cinzel text-sm font-medium">Título</span>
            <input
              className="rounded border border-black px-3 py-2"
              name="title"
              onChange={handleChange}
              type="text"
              value={values.title}
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-cinzel text-sm font-medium">Descripción</span>
            <textarea
              className="rounded border border-black px-3 py-2"
              name="description"
              onChange={handleChange}
              rows={10}
              value={values.description}
            />
          </label>

          <button
            className="cursor-pointer rounded border border-black px-3 py-3 font-medium disabled:cursor-not-allowed disabled:opacity-50"
            disabled={submitDisabled}
            style={submitStyles}
            type="submit"
          >
            {loading ? "Generando imagen..." : "Generar imagen"}
          </button>
        </form>

        <div className="fixed right-4 bottom-4">
          <p className="font-cinzel text-sm">v{process.env["APP_VERSION"]}</p>
        </div>
      </div>

      <div ref={viewerRef} className="fixed top-0 left-[100vw] overflow-hidden">
        <Viewer
          description={values.description}
          formatId={values.formatId}
          stoneId={values.stoneId}
          title={values.title}
        />
      </div>
    </main>
  );
}
