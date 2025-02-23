import MockChat from "./MockChat";

const Preview = () => (
  <>
    <h3 className="text-lg font-semibold mb-3">Preview</h3>
    <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
      <div className="p-4 bg-base-200">
        <div className="max-w-lg mx-auto">
          <MockChat />
        </div>
      </div>
    </div>
  </>
);

export default Preview;
