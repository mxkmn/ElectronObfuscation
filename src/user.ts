export class User {
	namee: string;
	mxkmn: number;

	setName(params: string) {
		this.namee = params;
		this.mxkmn = Math.random();

		console.log(`name: ${this.namee} age: ${this.mxkmn}`);
	}
}

export var xdd = new User();