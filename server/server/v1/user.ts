import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();

const router = new Router();
// 사용자 정보를 담을 객체 임의로 하나 생성했음

const student = {
  id: '31',
  name: '고태진',
  major: '컴퓨터과학부',
  type: 0,
  student_number: 2016920003,
};
router.get('/', (ctx: Koa.Context) => {
  ctx.body = 'user page';
});

router.get('/:id', (ctx) => {
  const num = ctx.params.id;

  if (student.id === num) {
    ctx.body = student;
  } else {
    ctx.body = '일치하는 학생이 없습니다.';
  }
});

export = router
