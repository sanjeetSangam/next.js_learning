import "server-only";

export const serverSideFunction = () => {
	console.log(`
        Use multiple libraries,
        use environment variables.
        interact with a database,
        proces confidential information
    `);

	return "server result";
};
