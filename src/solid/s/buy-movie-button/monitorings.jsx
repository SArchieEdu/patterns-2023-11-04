import { BuyButtonAnalyticContainer } from "./analytics";

export function BuyButtonMonitoringContainer({ text, onClick, onHover }) {
  const { sendClickMonitoring, sendHoverMonitoring } =
    useMonitoring("BuyButton");

  return (
    <BuyButtonAnalyticContainer
      onClick={() => {
        sendClickMonitoring();
        onClick();
      }}
      onMouseEnter={() => {
        sendHoverMonitoring();
        onHover();
      }}
      text={text}
    />
  );
}
