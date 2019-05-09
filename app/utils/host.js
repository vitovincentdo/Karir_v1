import { HOST, ENVIRONMENT } from 'karir/utils/properties';
import { get } from 'karir/utils/short';

export default function host(key) {

  const host = HOST[ENVIRONMENT];

  const list = {
    'article':{
      create: `${host}/api/article/post`,
      search: `${host}/api/article/list`
    },
    'thought':{
      create: `${host}/api/thought/post`
    },
    'job':{
      create: `${host}/api/job/post`,
      search: `${host}/api/job/list`,
      find: `${host}/api/job/get/:id`,
      update: `${host}/api/job/update`,
    },
    'counter':{
      create: `${host}/api/counter/post`,
    }
    // 'person':{
    //   search: `${host}/rest/JDBC_Tutorial/test_retrieve`
    // }
  }

  return get(list, key);
}
