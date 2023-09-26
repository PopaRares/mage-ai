from mage_ai.orchestration.triggers.time_trigger import TimeTrigger
import time


class LoopTimeTrigger(TimeTrigger):
    def __init__(self, wake_event):
        super().__init__()
        self.wake_event = wake_event

    def start(self) -> None:
        while True:
            self.last_run_time = int(time.time())
            self.run()
            current_time = int(time.time())
            sleep_time = self.trigger_interval - (current_time - self.last_run_time)
            if sleep_time > 0:
                if self.wake_event.wait(sleep_time):
                    self.wake_event.clear()
