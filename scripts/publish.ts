import { exec_log, cp_dist } from './utils';

(async () => {
  await exec_log(`npm run build`);
  await exec_log(`npm run clean.spec`);

  await cp_dist('package.json');
  await cp_dist('LICENSE');

  await exec_log(`npm publish`, 'dist');
})().catch(e => {
  console.error(e);
});
