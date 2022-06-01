import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "a-scene": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          embedded?: boolean;
          "avatar-recorder"?: string;
          shadow?: string;
          renderer?: string;
          background?: string;
          physics?: boolean;
          environment?: string;
        },
        HTMLElement
      >;
      "a-camera": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { positon?: string },
        HTMLElement
      >;
      "a-entity": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          events?: {
            bbuttondown: () => void;
            abuttondown: () => void;
            triggerdown: () => void;
            thumbsticktouchstart: () => void;
            gripdown: () => void;
          };
          class?: string;
          mixin?: string;
          position?: string;
          geometry?: string;
          scale?: string;
          material?: string;
          cursor?: string;
          raycaster?: string;
          environment?: string;
          camera?: boolean;
          button?: boolean;
          shadow?: boolean;
        },
        HTMLElement
      >;
      "a-box": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          hoverable?: boolean;
          grabbable?: boolean;
          stretchable?: boolean;
          draggable?: boolean;
          dropppable?: boolean;
          position?: string;
          rotation?: string;
          color?: string;
          width?: string;
          height?: string;
          depth?: string;
          visible?: string;
          mixin?: string;
        },
        HTMLElement
      >;
      "a-plane": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          hoverable?: boolean;
          grabbable?: boolean;
          stretchable?: boolean;
          draggable?: boolean;
          droppable?: boolean;
          position?: string;
          rotation?: string;
          color?: string;
          width?: string;
          height?: string;
        },
        HTMLElement
      >;
      "a-mixin": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          geometry?: string;
          hoverable?: boolean;
          grabbable?: boolean;
          stretchable?: boolean;
          draggable?: boolean;
          droppable?: boolean;
          shadow?: boolean;
          raycaster?: string;
        },
        HTMLElement
      >;
      "a-assets": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
