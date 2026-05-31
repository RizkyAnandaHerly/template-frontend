import "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          trigger?: string;
          colors?: string;
          size?: number;
          delay?: number;
          stroke?: string;
        },
        HTMLElement
      >;
    }
  }
}
