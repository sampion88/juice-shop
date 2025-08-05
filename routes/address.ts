/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response } from 'express'
import { AddressModel } from '../models/address'

module.exports.getAddress = function getAddress () {
  return async (req: Request, res: Response) => {
    const addresses = await AddressModel.findAll({ where: { UserId: req.body.UserId } })
    res.status(200).json({ status: 'success', data: addresses })
  }
}

module.exports.getAddressById = function getAddressById () {
  return async (req: Request, res: Response) => {
    const address = await AddressModel.findOne({ where: { id: req.params.id, UserId: req.body.UserId } })
    if (address != null) {
      res.status(200).json({ status: 'success', data: address })
    } else {
      res.status(400).json({ status: 'error', data: 'Malicious activity detected.' })
    }
  }
}

module.exports.delAddressById = function delAddressById () {
  return async (req: Request, res: Response) => {
    const address = await AddressModel.destroy({ where: { id: req.params.id, UserId: req.body.UserId } })
    if (address) {
      res.status(200).json({ status: 'success', data: 'Address deleted successfully.' })
    } else {
      res.status(400).json({ status: 'error', data: 'Malicious activity detected.' })
    }
  }
}

async function authenticate2(req, res){
    const query = {
        $where: `this.username.match(/${req.params.id}/)`
    };
    const query2 = {
        $eq: `this.username.match(/${req.params.id}/)`
    };

    try {
        let users = await User.find(query);
        users = await User.find({
                $and: [
                    { orderDate: { $gte: new Date('2024-01-01') } },
                    { status: 'completed' },
                    { $where: `this.username.match(/${req.params.id}/)`}
                    ]
                }
        );
        users = await User.find({$where: `this.username.match(/${req.params.id}/)`});
        users = await User.find(req.params.id);
        users = await User.find(query2);
    } catch (err) {
        console.log(err);
    }
}
