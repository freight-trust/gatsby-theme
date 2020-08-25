/**
 *   SPDX-License-Identifier: Apache-2.0
 *   SPDXVersion: SPDX-2.2
 *   SPDX-FileCopyrightText: Copyright 2020 FreightTrust and Clearing Corporation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import React from "react";

import {
  customArticleCardContainer,
  articleCardImage,
} from "./CustomArticleCard.module.scss";

export const CustomArticleCard = (props) => {
  const { imgSrc, title, subTitle } = props;
  return (
    <div className={customArticleCardContainer}>
      <div className={articleCardImage}>
        <img src={imgSrc} alt="article" />
      </div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
};