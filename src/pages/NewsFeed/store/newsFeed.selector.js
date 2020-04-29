export const newsFeedSelector = {
  getNewsFeed(state) {
    return state.newsFeed.feedList.map(feed => ({
      id: feed.Id,
      title: feed.Title,
      content: feed.Content,
      imageUrl: feed.ImageUrl,
      postDate: feed.PostDate,
      entities: feed.Entities,
      companyId: feed.CompanyId,
      companyEntityType: feed.CompanyEntityType,
      companyName: feed.CompanyName,
      companyLogoUrl: feed.CompanyLogoUrl,
      isArticleCompanyApproved: feed.IsArticleCompanyApproved,
      isVideoImage: feed.IsVideoImage,
      openInNewTab: feed.OpenInNewTab,
      publicationDate: feed.PublicationDate,
      uri: feed.URI,
      isSponsored: feed.IsSponsored,
      advertisementId: feed.AdvertisementId,
      companyLogoDominantColor: feed.CompanyLogoDominantColor,
      userEntities: feed.UserEntities,
      sharesNumber: feed.SharesNumber,
      readTime: feed.ReadTime,
    }))
  },
};
