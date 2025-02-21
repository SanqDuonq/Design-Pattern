class Computer {
	public CPU: string;
	public RAM: string;
	public Storage: string;
	public GPU: string;

	constructor() {
		(this.CPU = ""), (this.RAM = ""), (this.GPU = ""), (this.Storage = "");
	}

	ShowInfo(): void {
		console.log(
			`Computer: [CPU: ${this.CPU}], [Storage: ${this.Storage}], [RAM: ${this.RAM}], [GPU: ${this.GPU}]`
		);
	}
}

class ComputerBuild {
	private _computer: Computer;

	constructor() {
		this._computer = new Computer();
	}

	setCPU(cpu: string): this {
		this._computer.CPU = cpu;
		return this;
	}

	setRAM(ram: string): this {
		this._computer.RAM = ram;
		return this;
	}

	setStorage(storage: string): this {
		this._computer.Storage = storage;
		return this;
	}

	setGPU(gpu: string): this {
		this._computer.GPU = gpu;
		return this;
	}

    build(): Computer {
        return this._computer;
    }
}


const gamingPC = new ComputerBuild().setCPU('AMD').setGPU('NVIDIA').setRAM('16GB').setStorage('512GB').build().ShowInfo();
