'use client';
import React from 'react';

import { styled } from 'styled-components';

const Image = styled.img`
	width: 200px;
	height: 200px;
	object-fit: cover;
	border-radius: 6px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Placeholder = styled.div`
	width: 200px;
	height: 200px;
	background: #f0f0f0;
	border-radius: 6px;
`;

export default function CatViewer({ url }: { url: string }) {
	return url ? <Image src={url} alt="Cute cat" /> : <Placeholder />;
}
