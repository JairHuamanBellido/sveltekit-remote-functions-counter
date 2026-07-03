import { command, query } from '$app/server';
type Listener = (value?: unknown) => void;

let count = 0;
let listeners = new Set<Listener>();

export const getCount = query.live(async function* () {
	while (true) {
		yield count;
		const { promise, resolve } = Promise.withResolvers();
		listeners.add(resolve);
		await promise;
	}
});

export const incrementCounter = command(async () => {
	count++;

	for (const listener of listeners) listener();
	listeners.clear();
});
