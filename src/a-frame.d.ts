import * as React from "react";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "a-scene": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { embedded: boolean },
        HTMLElement
      >;
      "a-entity": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          events: {
            bbuttondown: () => void;
            abuttondown: () => void;
            triggerdown: () => void;
            thumbsticktouchstart: () => void;
            gripdown: () => void;
          };
        },
        HTMLElement
      >;
      "a-box": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          position: string;
          rotation: string;
          color: string;
        },
        HTMLElement
      >;
    }
  }
}
