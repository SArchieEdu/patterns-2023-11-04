import { Button } from "../button/component";

export function BuyButtonAnalyticContainer({ text, onClick, onHover }) {
  const { sendClickAnalytic, sendHoverAnalytic } = useAnalytics("BuyButton");

  return (
    <Button
      onClick={() => {
        sendClickAnalytic();
        onClick();
      }}
      onMouseEnter={() => {
        sendHoverAnalytic();
        onHover();
      }}
      text={text}
    />
  );
}
