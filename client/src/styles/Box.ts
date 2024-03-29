import React from "react";
import styled from "styled-components";
import { alignItems, background, border, borderRadius, boxShadow, color, compose, flexbox, fontSize, fontStyle, fontWeight, justifyContent, layout, margin, minWidth, padding } from "styled-system";

type Props = React.CSSProperties;

export const Box = styled.div<Props>(
    ({ theme }) => ({
        margin: 0,
        padding: 0,
        color: theme.main,
        transition: 'all 0.3s',
        background: "transparent"
    }),
    compose(
        layout,
        color,
        background,
        border,
        borderRadius,
        fontSize,
        padding,
        margin,
        fontWeight,
        alignItems,
        justifyContent,
        fontStyle,
        minWidth,
        flexbox,
        boxShadow
    ),
    `
    @media (max-width: 500px) {
        font-size: 13px;
      }
    `
)
