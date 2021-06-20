import styled from "@emotion/styled";

const Anchor = styled.a`
  transition: ${p => p.theme.colorModeTransition};
  color: ${p => p.theme.colors.hyperlink};

  &:visited {
    color: ${p => p.theme.colors.accent};
    opacity: 0.85;
  }

  &:hover,
  &:focus {
	 color: ${p => p.theme.colors.texthover};
	 background-color: ${p => p.theme.colors.linkhover};
	 text-decoration: underline;
  }
`;

export default Anchor;
