import styled from "styled-components";

const PageTemplateBlock = styled.div`
  width: 512px;
  height: 650px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

function PageTemplate({ children }) {
  return <PageTemplateBlock>{children}</PageTemplateBlock>;
}

export default PageTemplate;