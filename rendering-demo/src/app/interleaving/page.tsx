import ClientComp1 from "@/components/client-comp1";
import ServerComp1 from "@/components/server-comp1";

const InterLeaving = () => {
	return (
		<>
			<h1>InterLeaving</h1>
			<ClientComp1>
				<ServerComp1 />
			</ClientComp1>
		</>
	);
};

export default InterLeaving;
