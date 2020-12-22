export default class SystemMonitor {
    private cpuUsage;
    private memoryUsage;
    private loads;
    private interval;
    init(): Promise<{}>;
    close(): void;
    private calcLoad;
    getCpuUsage(): number;
    getMemoryUsage(): number;
}
