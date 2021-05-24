import styled from 'styled-components';

const StyledSpan = styled.span`
	@keyframes dot {
		50%: translateX(96px);
	}
	position: absolute;
	width: 16px;
	height: 16px;
	top: 12px;
	left: 15px;
	filter: blur(4px);
	background: #000;
	border-radius: 50%;
	transform: translateX(0);
	animation: dot 2.8s infinite;
`;
const Container = styled.div`
	@keyframes dots {
		50%: translateX(-31px);
	}
	transform: translateX(0);
	margin-top: 12px;
	margin-left: 31px;
	animation: dots 2.8s infinite;
`;

const MiddleSpan = styled.span`
	display: block;
	float: left;
	width: 16px;
	height: 16px;
	margin-left: 16px;
	filter: blur(4px);
	background: #000;
	border-radius: 50%;
`;
const LoaderContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 142px;
	height: 40px;
	margin: -20px 0 0 -71px;
	background: white;
	filter: contrast(20);
`;

const Loader = () => {
	return (
		<LoaderContainer>
			<StyledSpan />
			<Container>
				<MiddleSpan />
				<MiddleSpan />
				<MiddleSpan />
			</Container>
		</LoaderContainer>
	);
};

export default Loader;
