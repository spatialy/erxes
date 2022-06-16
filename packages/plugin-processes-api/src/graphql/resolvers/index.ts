import customScalars from '@erxes/api-utils/src/customScalars';

import JobCategory from './customResolver/jobCategory';
import FlowCategory from './customResolver/flowCategory';
import FlowProduct from './customResolver/flowProduct';

import {
  JobRefers as JobRefersMutations,
  JobCategories as JobCategoryMutations,
  Flows as FlowsMutations,
  FlowCategories as FlowCategoryMutations
} from './mutations';

import {
  JobRefers as JobReferQueries,
  JobCategories as JobCategoryQueries,
  Flows as FlowQueries,
  FlowCategories as FlowCategoryQueries
} from './queries';

const resolvers: any = async serviceDiscovery => ({
  ...customScalars,
  JobCategory,
  FlowCategory,
  Flow: FlowProduct,
  Mutation: {
    ...JobRefersMutations,
    ...JobCategoryMutations,
    ...FlowsMutations,
    ...FlowCategoryMutations
  },
  Query: {
    ...JobReferQueries,
    ...JobCategoryQueries,
    ...FlowQueries,
    ...FlowCategoryQueries
  }
});

export default resolvers;