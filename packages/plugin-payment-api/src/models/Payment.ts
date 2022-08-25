import { Model } from 'mongoose';
import * as _ from 'underscore';
import { IModels } from '../connectionResolver';
import {
  IPaymentConfig,
  IPaymentConfigDocument,
  paymentConfigSchema
} from './definitions/payment';

export interface IPaymentConfigModel extends Model<IPaymentConfigDocument> {
  createPaymentConfig(doc: IPaymentConfig): Promise<IPaymentConfigDocument>;
  removePaymentConfig(_id: string): void;
}

export const loadPaymentConfigClass = (models: IModels) => {
  class PaymentConfig {
    public static async createPaymentConfig(doc: IPaymentConfig) {
      return models.PaymentConfigs.create(doc);
    }

    public static async removePaymentConfig(_id: string) {
      return models.PaymentConfigs.deleteOne({ _id });
    }
  }

  paymentConfigSchema.loadClass(PaymentConfig);

  return paymentConfigSchema;
};