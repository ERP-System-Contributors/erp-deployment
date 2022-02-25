#
# ERP System - ERP data management platform
# Copyright © 2021 Edwin Njeru (mailnjeru@gmail.com)
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.
#

FROM node:14.18-alpine3.12
WORKDIR /root/
COPY package*.json ./
RUN npm install
COPY ./ .

EXPOSE 8981

CMD ["node", "server.js"]
