/*
 * Copyright (c) 2023, Salesforce.com, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export const processRequest = ({path, querystring}) => {
    console.log('I processed a request')
    return {
        path,
        querystring
    }
}
