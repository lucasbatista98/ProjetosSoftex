// Interface comum para os produtos
interface Computer {
  getRAM(): string;
  getHDD(): string;
  getCPU(): string;
  getType(): string;
  toString(): string;
}

// Implementação da interface para o tipo PC
class PC implements Computer {
  private ram: string;
  private hdd: string;
  private cpu: string;
  private type: string;

  constructor(ram: string, hdd: string, cpu: string) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.type = "PC";
  }

  getRAM(): string {
    return this.ram;
  }

  getHDD(): string {
    return this.hdd;
  }

  getCPU(): string {
    return this.cpu;
  }

  getType(): string {
    return this.type;
  }

  toString(): string {
    return `PC [RAM=${this.ram}, HDD=${this.hdd}, CPU=${this.cpu}, Type=${this.type}]`;
  }
}

// Implementação da interface para o tipo Server
class Server implements Computer {
  private ram: string;
  private hdd: string;
  private cpu: string;
  private type: string;

  constructor(ram: string, hdd: string, cpu: string) {
    this.ram = ram;
    this.hdd = hdd;
    this.cpu = cpu;
    this.type = "Server";
  }

  getRAM(): string {
    return this.ram;
  }

  getHDD(): string {
    return this.hdd;
  }

  getCPU(): string {
    return this.cpu;
  }

  getType(): string {
    return this.type;
  }

  toString(): string {
    return `Server [RAM=${this.ram}, HDD=${this.hdd}, CPU=${this.cpu}, Type=${this.type}]`;
  }
}

// Classe abstrata para a fábrica
abstract class ComputerFactory {
  abstract createComputer(ram: string, hdd: string, cpu: string): Computer;
}

// Implementação da fábrica para o tipo PC
class PCFactory extends ComputerFactory {
  createComputer(ram: string, hdd: string, cpu: string): Computer {
    return new PC(ram, hdd, cpu);
  }
}

// Implementação da fábrica para o tipo Server
class ServerFactory extends ComputerFactory {
  createComputer(ram: string, hdd: string, cpu: string): Computer {
    return new Server(ram, hdd, cpu);
  }
}

// Cliente
const pcFactory = new PCFactory();
const pc = pcFactory.createComputer("8GB", "1TB", "3.2GHz");
console.log(pc.toString());

const serverFactory = new ServerFactory();
const server = serverFactory.createComputer("16GB", "2TB", "2.8GHz");
console.log(server.toString());
