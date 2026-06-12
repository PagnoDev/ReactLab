import { Alert, type AlertData } from "./Alert";

interface AlertContainerProps {
  alerts: AlertData[];
  onClose: (id: number) => void;
}

export function AlertContainer({ alerts, onClose }: AlertContainerProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {alerts.map((alert) => (
        <Alert key={alert.id} data={alert} onClose={onClose} />
      ))}
    </div>
  );
}