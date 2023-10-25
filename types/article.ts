/** 面经列表项 */
export type ArticleItem = {
    /** 主键id */
    id: string
    /** 头像 */
    avatar: string
    /** 面经内容 */
    content: string
    /** 创建时间 */
    createdAt: string
    /** 创建人 */
    creator: string
    /** 点赞量 */
    likeCount: number
    /** 面经标题 */
    stem: string
    /** 浏览量 */
    views: number
  }