import React from "react";
import { childrenWithProps } from '../utils/utils'
import './ContainerPanel.css'

const ContainerPanel = props => (
  <div className="container-panel">
      {childrenWithProps(props)}
  </div>
)

export default ContainerPanel;