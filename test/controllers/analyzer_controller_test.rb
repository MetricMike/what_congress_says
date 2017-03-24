require 'test_helper'

class AnalyzerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get analyzer_index_url
    assert_response :success
  end

  test "should get markov" do
    get analyzer_markov_url
    assert_response :success
  end

  test "should get word_cloud" do
    get analyzer_word_cloud_url
    assert_response :success
  end

end
