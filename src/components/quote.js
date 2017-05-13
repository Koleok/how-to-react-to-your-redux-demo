import styled from 'styled-components'

export const Blockquote = styled.div`
  width: 75% !important;
  margin: auto !important;
  font-family: Georgia, serif;
  font-size: 18px;
  font-style: italic;
  width: 500px;
  margin: 0.25em 0;
  padding: 0.35em 40px;
  line-height: 1.45;
  position: relative;
  color: #383838;
  :before {
    display: block;
    padding-left: 10px;
    content: "\\201C";
    font-size: 80px;
    position: absolute;
    left: -20px;
    top: -20px;
    color: #7a7a7a;
  }
`

export const Cite = styled.div`
  color: #999999;
  font-size: 14px;
  display: block;
  margin-top: 5px;
  :before {
    content: "\\2014 \\2009";
  }
`
